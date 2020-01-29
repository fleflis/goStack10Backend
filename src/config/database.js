module.exports = {
  dialect: 'postgres',
  username: 'postgres',
  host: 'localhost',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
