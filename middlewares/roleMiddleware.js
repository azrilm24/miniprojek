const roleMiddleware = (requiredRole) => {
    
    return (req, res, next) => {
     
      const userRole = req.user.role;
      if (userRole !== requiredRole) {
        return res.status(403).json({ message: 'Akses ditolak. Anda tidak memiliki izin yang cukup.' });
      }
      next();
    };
  };
  
  module.exports = roleMiddleware;
  