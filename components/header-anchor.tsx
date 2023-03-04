export const HeaderAnchor = ({ id = '' }) => {
  return (
    <a
      style={{
        display: 'block',
        position: 'relative',
        top: '-120px',
        visibility: 'hidden',
      }}
      id={id}
    ></a>
  );
};
