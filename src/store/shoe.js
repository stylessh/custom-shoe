import create from "zustand";

const useShoeStore = create((set) => ({
  current: null,
  setCurrent: (item) => set({ current: item }),

  setColor: (item, color) =>
    set((state) => ({
      ...state,
      items: {
        ...state.items,
        [item]: color,
      },
    })),

  items: {
    laces: "#ffffff",
    sole: "#ffffff",
    caps: "#ffffff",
    stripes: "#ffffff",
    mesh: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
    inner: "#ffffff",
  },

  exportMode: false,
  setExportMode: (value) => set({ exportMode: value }),

  showScreenshotButton: false,
  setShowScreenshotButton: (value) => set({ showScreenshotButton: value }),
}));

export default useShoeStore;
