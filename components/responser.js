import { useEffect, useState } from "react";
import { ShowJson } from "@/chakra/components/show-json";
import { logger } from "@/services/logger";

/**
 * @SCOPE:  development utitlity to show json values of any reqeust,
 * - can also be used to make requests for debugging purposes, when no initialData is provided
 */

export const Responser = ({
  fetcher = () => logger.info("responser - default fetched"),
  initialData,
}) => {
  const [data, setData] = useState(initialData ?? null);

  useEffect(async () => {
    if (initialData || data) return;
    const response = await fetcher();

    if (response?.data) {
      setData(response?.data);
      logger.success("responser", response?.data);
    } else logger.error("responser");
  }, [fetcher]);

  return <ShowJson data={data} />;
};
