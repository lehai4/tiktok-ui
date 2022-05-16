import Header from '~/components/Layout/components/Header';

const HeaderOnLy = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default HeaderOnLy;
