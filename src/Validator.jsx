<Router basename={process.env.REACT_APP_BASENAME || ""}>
  s
  <div>
    {routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={withTracker((props) => {
            return (
              <route.layout {...props}>
                <route.component {...props} />
              </route.layout>
            );
          })}
        />
      );
    })}
  </div>
</Router>;
