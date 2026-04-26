function Loader({ showLoader }) {
  if (!showLoader) return null;

  return (
    <div id="loader">
      <h1>ENVIORNMENTS</h1>
      <h1>EXPIRIENCES</h1>
      <h1>CONTENTS</h1>
    </div>
  );
}

export default Loader;

