export const verifyTokenController = (req, res) => {
  try {
    const { id, role } = req.auth;
    return res.status(200).json({ id, role });
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};
