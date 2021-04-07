import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { Providers } from "@/chakra/contexts";
import Nprogress from "@/components/nprogress";

import appConfig from "../../app.config";
import {
  useLocalDataState,
  useLocalDataDispatch,
} from "@/contexts/local-data-context";

export const ScaffoldContext = createContext();
export function ScaffoldProvider({ children }) {
  return (
    <ScaffoldContext.Provider value={{ ...appConfig }}>
      <Providers.modal>
        <Providers.modalForm>
          <Providers.sidebar>
            <Providers.toasts>
              <Providers.errors>
                <Nprogress />
                {children}
              </Providers.errors>
            </Providers.toasts>
          </Providers.sidebar>
        </Providers.modalForm>
      </Providers.modal>
    </ScaffoldContext.Provider>
  );
}

export const useScaffold = () => {
  const context = useContext(ScaffoldContext);
  if (context === undefined) {
    throw new Error("useScaffoldState must be used within a ScaffoldProvider");
  }

  const { localData: options } = useLocalDataState("options");
  const { setLocalData } = useLocalDataDispatch("options");
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(false);
  const [scaffoldTheme, setScaffoldTheme] = useState(context?.scaffold?.theme);

  const updateHeaderShow = useCallback((boolean) => setShowHeader(boolean), []);
  const updateFooterShow = useCallback((boolean) => setShowFooter(boolean), []);

  useEffect(() => {
    setLocalData({
      ...context?.options,
      tips: { show: true },
      theme: context?.scaffold?.theme,
    });
  }, []);
  /* scaffold = {header, footer} && restCtx: {details, options, routes, seo} */
  const { scaffold, ...restCtx } = context;

  /* defaults: {header, footer} && rest : {null} */
  const { defaults, theme, ...rest } = scaffold;

  return {
    header: defaults?.header,
    footer: defaults?.footer,
    scaffold: rest || null,
    properties: Object.keys(rest),
    config: restCtx,
    theme: scaffoldTheme,
    setScaffoldTheme,
    showHeader,
    showFooter,
    setShowHeader: updateHeaderShow,
    setShowFooter: updateFooterShow,
  };
};
