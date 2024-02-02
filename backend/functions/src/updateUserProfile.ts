const functions = require('firebase-functions');
import admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

exports.updateUserProfile = functions.https.onCall(async (data:any, context:any) => {
    try {
        const userId = context.auth.uid;
        const { firstName, lastName, profilePicture } = data;

        // Update user document in Firestore
        await db.collection('users').doc(userId).update({
            firstName,
            lastName,
            profilePicture, // Reference to Cloud Storage image URL
        });

        return { success: true, message: 'User profile updated successfully' };
    } catch (error) {
        console.error('Error updating user profile:', error);
        return { success: false, message: 'Error updating user profile' };
    }
});
