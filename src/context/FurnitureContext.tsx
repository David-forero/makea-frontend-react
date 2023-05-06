import { useContext, createContext, ReactNode } from "react";

interface IFurnitureContext {
  // variables
}

interface IFornitureProviderProps {
  children: ReactNode;
}

const FurnitureContext = createContext<IFurnitureContext>({} as IFurnitureContext);

const FurnitureProvider = ({ children }: IFornitureProviderProps) => {
  return (
    <FurnitureContext.Provider
      value={
        {
          /*🔻  Variables 🔻*/
          /*🔻  Funciones 🔻*/
        }
      }
    >
      {children}
    </FurnitureContext.Provider>
  );
};

export default FurnitureProvider;

export const useFurnitureContext = () => useContext(FurnitureContext);
