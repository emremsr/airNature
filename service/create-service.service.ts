import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateServiceService {

  constructor() { }


  treeDescription = [
    {
      id:1,
      treeName : "Pine Tree",
      treeDetails:"Pine is the name given to the coniferous species that includes forest trees of the Pinus genus of the Pinaceae family.",
      treePrice : "300",
      treeimg: "../../assets/images/tree1.jpg"
    },
    {
      id:2,
      treeName : "Plane Tree",
      treeDetails:"Sycamore is the name of tall, thick-diameter tree species that make up the genus Platanus from the Platanaceae family of sycamores. They are the only living members of the Platanaceae family. The only species that naturally spreads in Turkey is the eastern plane tree. All mature members of Platanus are tall and reach up to 50 meters in length.",
      treePrice : "450",
      treeimg: "../../assets/images/tree2.jpg"
    },
    {
      id:3,
      treeName : "Apricot Tree",
      treeDetails:"The apricot tree is a fruit tree in the rose family. Apricot, which is a fruit, is extremely beneficial and strengthens the immune system.",
      treePrice : "500",
      treeimg: "../../assets/images/tree3.jpg"
    },
    {
      id:4,
      treeName : "Walnut Tree",
      treeDetails:"Walnut is the common name of tree species with single feathery leaves arranged opposite each other and aromatic scented tree species in the genus Juglans from the Juglandaceae family. They are trees that shed their leaves in winter. The pulp of young shoots should be divided. The buds are covered with a small number of scales.",
      treePrice : "412",
      treeimg: "../../assets/images/tree4.jpg"
    },
    {
      id:5,
      treeName : "Cedar Tree",
      treeDetails:"Cedar is the name given to the coniferous tree species that make up the Cedrus genus from the pine family. They have an average lifespan of 1000 years, they can grow up to 40 meters in length and 2 meters in diameter.",
      treePrice : "1000",
      treeimg: "../../assets/images/tree5.jpg"
    },
    {
      id:6,
      treeName : "Cone Tree",
      treeDetails:"As the only evergreen tree species, pines, like other trees, keep their leaves fresh in autumn and are always green in summer and winter. Another feature is that it is long-lasting and durable. It also has needles and its own product, the cone.",
      treePrice : "100",
      treeimg: "../../assets/images/tree6.jpg"
    },
  ]


}
