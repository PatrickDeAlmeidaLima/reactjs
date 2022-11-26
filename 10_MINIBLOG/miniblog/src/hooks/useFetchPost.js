/*eslint no-unused-expressions: "error"*/
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, doc, getDoc } from "firebase/firestore";

export const useFetchPost = (docCollection, id) => {

    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);
    useEffect(() => {
        async function loadPost() {
            if (cancelled) return
            setLoading(true)
            try {
                const docRef = await doc(db, docCollection, id)
                const docSnap = await getDoc(docRef)

                setDocument(docSnap.data())
                setLoading(false)
            } catch (error) {
                console.log(error);
                setError(error.message)
                setLoading(false)
            }
        }
        loadPost();
    }, [docCollection, id, cancelled])
    useEffect(() => {
        return () => setCancelled(true);
    }, []);
    return { document, loading, error };
};