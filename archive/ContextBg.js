import { useState, createContext } from 'react';

export const BackgroundContext = createContext();

export const BgProvider = ({ children }) => {
    const [background, setBackground] = useState({ current: 'light', light: 'ffffff', dark: '212121' });
    // setBackground(background => {
    //     // code
    // const newBackground = current === 'light' ? { ...background, current: 'dark' } : { ...background, current: 'light' };
    //     return newBackground;
    // });
    return (
        <BackgroundContext.Provider value={[background, setBackground]}>
            { children}
        </BackgroundContext.Provider>
    );
}