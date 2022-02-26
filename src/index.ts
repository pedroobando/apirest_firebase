import app from './app';

const main = () => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
  });
  // app.listen(port);
};

main();
