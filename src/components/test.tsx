import React, { useState, useEffect } from 'react';
import { FeatureFlag } from 'ht-common/services/ts/FeatureFlagService';
import { fetchFeatureFlags } from 'ht-common/services/ts';
// @ts-ignore
import SessionServices from 'ht-common/services/session-services';

export interface FlagDictionary {
  [key: string]: boolean;
}

export interface FeatureFlagContextProps {
  featureFlags: FlagDictionary;
  setFlags: React.Dispatch<React.SetStateAction<FlagDictionary>>;
}

const createFlagDict = (flags: FeatureFlag[]) => {
  const flagDict: FlagDictionary = {};
  flags.map((f: FeatureFlag) => {
    flagDict[f.name] = f.isActive;
  });

  return flagDict;
};

export const FeatureFlagContext = React.createContext<FeatureFlagContextProps>({
  featureFlags: {},
  setFlags: () => ({} as FlagDictionary),
});

export const FeatureFlagProvider = (props: React.HTMLProps<HTMLDivElement>) => {
  const [featureFlags, setFlags] = useState<FlagDictionary>({});

  useEffect(
    () => {
      const fetchFlags = async () => {
        if (!SessionServices.actingUser.isUnknown) {
          const featureFlags = await fetchFeatureFlags();
          setFlags(createFlagDict(featureFlags));
        }
      };

      fetchFlags();
    },
    [],
  );

  return (
    <FeatureFlagContext.Provider value={{ featureFlags, setFlags }}>
      {props.children}
    </FeatureFlagContext.Provider>
  );
};
