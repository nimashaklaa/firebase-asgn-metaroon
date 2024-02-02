const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();
const storage = admin.storage().bucket();

exports.uploadProfilePicture = functions.https.onRequest(async (req, res) => {
    try {
        const userId = req.query.userId; // Assume you pass userId as a query parameter
        const file = req.body; // The uploaded file, assuming it's passed in the request body

        // Upload file to Cloud Storage
        const fileName = `profilePictures/${userId}_${Date.now()}_${file.originalname}`;
        const fileUpload = storage.file(fileName);
        await fileUpload.save(file.buffer, {
            metadata: {
                contentType: file.mimetype,
            },
        });

        const fileUrl = `https://storage.googleapis.com/${storage.name}/${fileName}`;

        // Update user document in Firestore with the profile picture URL
        await db.collection('users').doc(userId).update({
            profilePicture: fileUrl,
        });

        return res.status(200).json({ success: true, message: 'Profile picture uploaded successfully' });
    } catch (error) {
        console.error('Error uploading profile picture:', error);
        return res.status(500).json({ success: false, message: 'Error uploading profile picture' });
    }
});
