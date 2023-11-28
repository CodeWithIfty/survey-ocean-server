const Payments = require("../../../models/Payments");
const Users = require("../../../models/Users");

const getAdminAnalyticsData = async (req, res) => {
  try {
    // Calculate total sales based on price
    const totalSales = await Payments.aggregate([
      {
        $group: {
          _id: null,
          totalSales: {
            $sum: { $toDouble: "$trans_amount" },
          },
        },
      },
    ]);

    const totalPayments = await Payments.countDocuments();
    const totalUsers = await Users.countDocuments();

    // Count users based on different roles
    const userRoleCounts = await Users.aggregate([
      {
        $group: {
          _id: "$user_role",
          count: { $sum: 1 },
        },
      },
    ]);

    // Create an object to store user role counts
    const userRoleCountsObject = {};
    userRoleCounts.forEach((role) => {
      userRoleCountsObject[role._id] = role.count;
    });

    res.status(200).json({
      totalSales: totalSales.length > 0 ? totalSales[0].totalSales : 0,
      totalPayments,
      userRoleCounts: userRoleCountsObject,
      totalUsers,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getAdminAnalyticsData;
