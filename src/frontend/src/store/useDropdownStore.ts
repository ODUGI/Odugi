import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type DropdownType = null | "community";

interface DropdownState {
  dropdownType: DropdownType;
  showDropdown: boolean;
}

interface DropdownAction {
  setDropdownType: (dropdownType: DropdownType) => void;
  setShowDropdown: (showDropdown: boolean) => void;
}

const useDropdownStore = create<DropdownState & DropdownAction>()(
  devtools((set) => ({
    dropdownType: null,
    showDropdown: false,

    setDropdownType: (dropdownType: DropdownType) => set({ dropdownType }),
    setShowDropdown: (showDropdown: boolean) => set({ showDropdown }),
  }))
);

export default useDropdownStore;
