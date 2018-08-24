const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });

exports.getPolicies = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.status(200).json({
      policies: [
        {
          id: 0,
          coverages: [
            "Privacy Regulary Claims Coverage",
            "Security Breach Response Coverage",
            "Cyber Extortion",
            "Business Income and Digital Asset Restoration",
            "PCI DSS Assessment",
            "Privacy Liability (including Employee Privacy)",
            "Security liability",
            "Multimedia Liability"
          ]
        },
        {
          id: 1,
          coverages: [
            "Data Breach Response",
            "Cyber Extortion",
            "Data Recovery",
            "Business Interruption",
            "Dependent Business Interruption",
            "System Failure Business",
            "Cyber Crime",
            "Cyber Deception",
            "Privacy and Security Liability",
            "Media Liability"
          ]
        },
        {
          index: 2,
          coverages: [
            "Cyber Incident Response Fund",
            "Business Interruption",
            "Contingent Business Interruption",
            "Digital Data Recovery",
            "Network Extortion",
            "Cyber, Privacy and Network Security Liability",
            "Payment Card Loss",
            "Regulatory Proceeds",
            "Electronic, Social, and Printed Media Liability"
          ]
        },
        {
          method: req.method
        },
        {
          data: req.body
        }
      ]
    });
  });
});
