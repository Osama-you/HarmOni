import ItemPlaceholderIcon from '../assets/icons/ItemPlaceholderIcon';
import { watchTogetherNavigation } from '../modules/watchTogether/navigation';

/**
 * Configuration object defining the navigation items.
 * Each item includes a label, component to render, and icon.
 */
export const navigationConfig = {
  ...watchTogetherNavigation,
  sectionOne: {
    component: <div>Section 1 Content</div>,
    label: 'Section 1',
    icon: <ItemPlaceholderIcon />,
  },
  sectionTwo: {
    component: <div>Section 2 Content</div>,
    label: 'Section 2',
    icon: <ItemPlaceholderIcon />,
  },
  sectionThree: {
    component: <div>Section 3 Content</div>,
    label: 'Section 3',
    icon: <ItemPlaceholderIcon />,
  },
  sectionFour: {
    component: <div>Section 4 Content</div>,
    label: 'Section 4',
    icon: <ItemPlaceholderIcon />,
  },
  sectionFive: {
    component: <div>Section 5 Content</div>,
    label: 'Section 5',
    icon: <ItemPlaceholderIcon />,
  },
  sectionSix: {
    component: <div>Section 6 Content</div>,
    label: 'Section 6',
    icon: <ItemPlaceholderIcon />,
  },
  sectionSeven: {
    component: <div>Section 7 Content</div>,
    label: 'Section 7',
    icon: <ItemPlaceholderIcon />,
  },
};
