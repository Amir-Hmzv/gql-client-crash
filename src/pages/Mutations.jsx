import { gql, useMutation } from '@apollo/client';
import React from 'react';


const CREATE_PRODUCT = gql`
mutation CreateProduct($name:String!,$quantityPerUnit:Int!) {
  createProduct(record :{
    name: $name
    quantityPerUnit: $quantityPerUnit
  }){
    record{
      name
    }
  }
}
`

const Mutations = () => {
    const [createProduct,{data,loading,error}] = useMutation(CREATE_PRODUCT,{
        variables: {
            name : 'hotdog',
            quantityPerUnit : 4
        }
    })

    console.log({data,loading,error});

    return (
        <div>
            <button onClick={() => createProduct()}>click</button>
        </div>
    );
};

export default Mutations;