import Footer from "@/components/footer";

function Layout({ children }) {
  return (
    <>
      <main className="flex-grow flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
