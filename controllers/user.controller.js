const { User } = require('../models');

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const data = await User.findAll();

      res.status(200).json({
        message: 'Berhasil mendapatkan data users',
        user: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  getUserByID: async (req, res) => {
    const { id } = req.params;
    const data = await User.findAll({ where: { id: id } });

    if (data.length === 0) {
      res.status(400).json({
        message: `Todo dengan id : ${id} tidak ditemukan`,
      });
    }

    res.status(200).json({
      message: `Berhasil mendapat data user : ${id}`,
      todos: data,
    });
  },

  editUserByID: async (req, res) => {
    const { id } = req.params;

    await User.update(
      { name: req.body.name },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(201).json({
      message: `Berhasil mengedit user ${id}`,
      users: User,
    });
  },

  deleteUserByID: async (req, res) => {
    const { id } = req.params;

    await User.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).json({
      message: `Berhasil menghapus data user ${id}`,
      users: User,
    });
  },
};
