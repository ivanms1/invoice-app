import create from 'zustand';

type AppState = {
  currentInvoice: any;
  setCurrentInvoice: (invoice: any) => void;
};

const useStore = create<AppState>((set) => ({
  currentInvoice: {},
  setCurrentInvoice: (invoice) => set({ currentInvoice: invoice }),
}));

export default useStore;
