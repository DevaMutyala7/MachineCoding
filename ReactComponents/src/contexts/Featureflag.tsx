import { createContext, useEffect, useState } from "react";

const FeatureFlag = createContext<any>(null);

function FeatureFlagProvider({ children }: { children: React.ReactElement }) {
  let [features, setFeatures] = useState({
    darkMode: false,
  });

  return (
    <FeatureFlag.Provider value={features}>{children}</FeatureFlag.Provider>
  );
}

export default FeatureFlagProvider;
