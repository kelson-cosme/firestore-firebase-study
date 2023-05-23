import './App.css';
import { } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, where, query, setDoc, doc, addDoc, updateDoc, increment, deleteDoc, deleteField  } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut , signInWithEmailAndPassword } from "firebase/auth";
import React, {useState, useEffect, useLayoutEffect} from "react";


const firebaseConfig = {
  apiKey: "AIzaSyDu9roM1q92Rfvu87eoa-Qnes_6EuajPVc",
  authDomain: "colegio-e6fc3.firebaseapp.com",
  projectId: "colegio-e6fc3",
  storageBucket: "colegio-e6fc3.appspot.com",
};

function App() {


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const [nome, setNome] = useState([])
const [nome1, setNome1] = useState([])


useEffect(() => {
  async function getAlunos(db) {
    
    
    //FAZER LOGIN DOS USUARIOS
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, "kelson.almeida@outlook.com", "abc123")
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log("Signed in", user)
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
    //------------------------------------
    //DESLOGAR USUÁRIOS
    // const auth = getAuth();
    // signOut(auth).then(() => {
    //   console.log("Sign-out successful")
    //   // Sign-out successful.
    // }).catch((error) => {
    //   // An error happened.
    // });
    //------------------------------------
    //VER USUARIOS LOGADOS
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     const uid = user.uid;
    //     console.log(uid)
    //   } else {
    //     console.log("Ninguem conectado")
    //   }
    // });
    //------------------------------------
    //CRIAR USUÁRIOS
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, "kelson.almeida@outlook.com", "abc123")
  //   .then((userCredential) => {
  //   const user = userCredential.user;
  //     console.log(user)
  // })
  //   .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //     console.log(error, errorMessage)
  // });
    
    
    //====================
    // Apagar algum campo
    // const teste = doc(db, "turmaA", "QHf1BJhTSB6qrxsNJKiY");
    // await deleteDoc(doc(db, "turmaA", "QHf1BJhTSB6qrxsNJKiY"));
    // ------------
    //Encrementar
    // const teste = doc(db, "turmaA", "QHf1BJhTSB6qrxsNJKiY");
    // await updateDoc(teste, {
    //   faltas: increment(10)
    // });
    // ------------
    // //Atualizar um documento a seleção 
    // const teste = doc(db, "turmaA", "VnDBKHxlIJ1P0jSCXFRk");
    // await updateDoc(teste, {
    //   nome: "Fermino",
    //   sobrenome: "Almeida"
    // });
    // ------------
    //Adicionar um novo documento a seleção 
      // await addDoc(collection(db, "turmaA"),{
      //   nome: "Kelson",
      //   sobrenome: "Cosme",
      // })    

    // ------------
    //Filtro para os nomes iguais
    // const alunos = collection(db, 'turmaA');
    // const q = query(alunos, where("nome", "==", "Kelson"));

    // const alunosSnapshot = await getDocs(q);
    // alunosSnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.data().nome, doc.data().sobrenome);
    //   });
  // ------------
  //Filtro para as notas maiores que 5
  // async function getAlunos(db) {
  //   const alunos = collection(db, 'turmaA');
  //   const q = query(alunos, where("notas.nota1", ">", 5));

  //   const alunosSnapshot = await getDocs(q);
  //   alunosSnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       console.log(doc.data().nome);
  //     });
    
  }
  getAlunos(db)  
},[])


// function verAlunos(){

//   setNome1(nome.map( (nome) => (
//       <li>{nome.nome}</li>
//     )))
// }

// const [endereco, setEndereco] = useState({})

// function manipularEndereco(event){
//   setEndereco({
//     cep: event.target.value
//   })

//   if(endereco.cep && endereco.cep.length === 8){
//     fetch(`https://viacep.com.br/ws/${endereco.cep}/json/`)
//       .then(resposta => resposta.json())
//       .then(dados => {
//         setEndereco({
//           cep: dados.cep,
//           logradouro: dados.logradouro,
//           localidade: dados.localidade
//         })
//       })
//   }
// }

  return (
    <div>
      <ul>
        </ul>
    </div>
  );
}

export default App;
