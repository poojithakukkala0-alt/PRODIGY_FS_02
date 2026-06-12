exports.validateEmployee = (req, res, next) => {
  const { name, email, position, department, salary } = req.body;
  if (!name || !email || !position || !department || !salary) {
    return res.status(400).json({ message: 'Please include all required employee fields' });
  }
  next();
};
