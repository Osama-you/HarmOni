import WatchTogetherIcon from './assets/icons/WatchTogetherIcon';
import WatchTogetherHome from './WatchTogetherHome';

/**
 * Navigation configuration for the "Watch Together" feature.
 * Defines the component, label, and icon associated with this feature.
 */
export const watchTogetherNavigation = {
  watchTogether: {
    component: <WatchTogetherHome />,
    label: 'Watch Together',
    icon: <WatchTogetherIcon />,
  },
};
