import React from 'react';

interface IPageProps {
  children: React.ReactNode;
}

export const Page: React.FC<IPageProps> = ({ children }) => {
  return <main className="main">{children}</main>;
};
