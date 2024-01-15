const AdminPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-gray100 flex-1 m-5 ml-0 rounded-2xl p-5">
      {children}
    </section>
  );
};

export default AdminPageLayout;
