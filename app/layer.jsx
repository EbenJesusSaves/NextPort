import "@styles/globals.css";

export const metadata = {
  title: "BeautyFriend",
  description: "Discover and share your imaginations ",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="">
          <div className="" />
        </div>
        <main className="">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
