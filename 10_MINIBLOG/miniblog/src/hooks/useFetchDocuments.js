import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where, } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null){

    const [documents, setDocuments] = useState(null)
    const [error, setErrror] = useState(null)
    const [loading, setLoading] = useState(null)
}