import { create } from 'zustand';

export const useMenuClick = create((set) => ({
    MenuClick: false,
    MenuOpen: false,
    hero: null,
    about: null,
    aboutVisible: false,
    heroVisible: true,
    skills: null,
    projects: null,
    contact: null,
    // MenuClose: true,
    handleHeroVisible: () => set((state) => ({
      heroVisible: state.heroVisible = !state.heroVisible,
    })),
    handleAboutVisible: () => set((state) => ({
      aboutVisible: state.aboutVisible = !state.aboutVisible,
    })),

    handleContactT: () => set((state) => ({
      contact: state.contact = 't'
    })),
    handleContactF: () => set((state) => ({
      contact: state.contact = 'f'
    })),

    handleProjectsT: () => set((state) => ({
      projects: state.projects = 't'
    })),
    handleProjectsF: () => set((state) => ({
      projects: state.projects = 'f'
    })),

    handleSkillsT: () => set((state) => ({
      skills: state.skills = 't'
    })),
    handleSkillsF: () => set((state) => ({
      skills: state.skills = 'f'
    })),

    handleAboutTop: () => set((state) => ({
      about: state.about = 'top'
    })),
    handleAboutT: () => set((state) => ({
      about: state.about = 't'
    })),
    handleAboutF: () => set((state) => ({
      about: state.about = 'f'
    })),

    handleMenuClick: () => set((state) => ({ 
      MenuClick: state.MenuClick  = !state.MenuClick,
    })),
    handleHeroT: () => set((state) => ({
      hero: state.hero = 't'
    })),
    handleHeroM: () => set((state) => ({
      hero: state.hero = 'm'
    })),
    handleHeroB: () => set((state) => ({
      hero: state.hero = 'b'
    })),
    handleHeroV: () => set((state) => ({
      hero: state.hero = 'v'
    })),
    handleMO: () => set((state) => ({
      MenuOpen: state.MenuOpen = !state.MenuOpen
    })),
    handleMenutrue: () => set((state) => ({ 
      MenuOpen: state.MenuOpen  === true 
    })),
    handleMenufalse: () => set((state) => ({ 
      MenuOpen: state.MenuOpen  === false 
    })),
    // removeAllBears: () => set({ bears: 0 }),
    // updateBears: (newBears) => set({ bears: newBears }),
  }));