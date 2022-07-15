import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom';
import routes from '../router';

const AppContent = () => {
  return (
    <Routes>
      {routes.map((route, idx) => {
        return (
          route.element && (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              element={<route.element />}
            />
          )
        )
      })}
    <Route path="*" element={<Navigate to="home" replace />} />
    </Routes>
  );
}
export default React.memo(AppContent)