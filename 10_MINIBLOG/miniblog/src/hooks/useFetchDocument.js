import { useState, useEffect } from "react";
import { db } from "../firebase/config";
// eslint-disable-next-line
import {
    doc,
    getDoc
} from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {

    const [document, setDocument] = useState(null)
    const [error, setErrror] = useState(null)
    const [loading, setLoading] = useState(null)

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {

        async function loadDocument() {
            if (cancelled) return

            setLoading(true)
            try {

                const docRef = await doc(db, docCollection, id)
                const docSnap = await getDoc(docRef)

                setDocument(docSnap.data())

                setLoading(false);
            } catch (error) {
                setErrror(error.message);
                console.log(error.message);
                setLoading(false);
            }

        }

        loadDocument();
    }, [docCollection, id, cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    }, []);
    return { document, loading, error };
};