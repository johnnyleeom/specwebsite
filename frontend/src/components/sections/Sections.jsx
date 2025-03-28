import React from 'react';

const Sections = React.forwardRef(({ id, className, name, message, children }, ref) => {
  return (
    <section id={id} className={className} ref={ref}>
      <h2 id="Section-Name">{name}</h2>
      <p>{message}</p>
      {children}
    </section>
  );
});

export default Sections;
