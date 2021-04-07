import Router from "next/router";
import { logger } from "@/services/logger";

export async function authHandler(fn) {
  // @SCOPE:  used to handle all authentication related response redirects
  const response = await fn();
  if (response?.error || response?.status > 299) {
    logger.error("⛔️ authHandler, Error", response?.error.message);
    return { error: response.error, status: response?.status };
  }

  if (response?.data || response?.status < 300) {
    logger.success("✅ authHandler, Success", response);
    return response;
  }
}

export function handlePromises(promises = []) {
  // @SCOPE: used by media api to handle multiple requests required to save a file
  return Promise.all(promises)
    .then((responses) => {
      logger.success(_, responses);
      return responses;
    })
    .catch((error) =>
      logger.error(
        `handlePromises Error in promise ${JSON.stringify(error, null, 2)}`
      )
    );
}

// @SCOPE:  used for client-side response handling

export const handleResponseRedirect = ({
  response,
  origin = "@response-redirect",
  destination = "/auth/signin",
  data,
  error,
  message, // @TODO: implement custom message
}) => {
  // @SCOPE:  used to offload client-side reponse redirection responsibilities with toast support
  if (process.browser) {
    if (response?.status > 299 || error || response?.error) {
      logger.error(
        "response-redirect ~ error || response?.error",
        error || response?.error,
        response,
        "redirectTo: ",
        destination
      );
      // handle errors
      Router.push(
        `${destination}/?error="@${origin}--${JSON.stringify(
          error || response?.error
        )}"`
      );
      return;
    } else if (
      response?.status < 300 ||
      data?.length ||
      response?.data?.length
    ) {
      logger.success(
        "🚀 ~ response-redirect ~ data || response?.data",
        data || response?.data,
        response.status,
        "redirectTo: ",
        destination
      );
      // handle success
      Router.push(
        `${destination}/?success="@${origin}--${JSON.stringify({
          data: data || response?.data,
        })}"`
      );
      return;
    }
  }
};
