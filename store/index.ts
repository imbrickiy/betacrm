import { create } from 'zustand';

interface States {
	sidebar: string;
	toggleSidebar: () => void;
}

export const useStore = create<States>((set) => ({
	sidebar: 'full',
	toggleSidebar: () => set((state: States) => ({ sidebar: state.sidebar === 'full' ? 'compact' : 'full' })),
}));