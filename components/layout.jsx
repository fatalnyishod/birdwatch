import Header from './header';
import Subscription from './subscription';

function Layout({children}) {
  return (
    <>
      <Header />

      {children}

      <Subscription />
    </>
  );
}

export default Layout;
