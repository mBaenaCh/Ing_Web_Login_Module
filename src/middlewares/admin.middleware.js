export const verifyAdmin = (req, res, next) => {
  if (req.auth.role !== 'Admin') return res.status(403).json({ message: 'No tienes permiso' });
  next();
};
