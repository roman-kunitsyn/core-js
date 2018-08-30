let perovskiteCoordinats = {
  N: [0.5, 0.5, 0.5],
  M: [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 1],
    [1, 1, 1],
    [1, 0, 1]
  ],
  Mn: [
    [0.5, 0, 0.5],
    [0.5, 0.5, 0],
    [0, 0.5, 0.5],
    [1, 0.5, 0.5],
    [0.5, 1, 0.5],
    [0.5, 0.5, 1]
  ]
};

let perovskiteRenderStyle = {
  N: {
    radius: 0.15,
    color: [0, 0, 0]
  },
  M: {
    radius: 0.1,
    color: [255, 0, 0]
  },
  Mn: {
    radius: 0.2,
    color: [0, 0, 255]
  }
};

renderPerovskite();

function renderAtom(atom) {
  let sphere = BABYLON.Mesh.CreateSphere(atom.name, 16, atom.radius, scene);
  sphere.position.x = atom.x;
  sphere.position.y = atom.y;
  sphere.position.z = atom.z;

  var material = new BABYLON.StandardMaterial("material_atom", scene);
  material.diffuseColor = new BABYLON.Color3(atom.color[0], atom.color[1], atom.color[2]);
  material.alpha = 0.9;
  sphere.material = material
  return sphere;
}

function renderPerovskite() {
  let n = perovskiteCoordinats.N;
  renderAtom({
    x: n[0],
    y: n[1],
    z: n[2],
    name: "atom_N",
    radius: perovskiteRenderStyle.N.radius,
    color: perovskiteRenderStyle.N.color
  });
  let ms = perovskiteCoordinats.M;
  ms.forEach((item, index) => {
    renderAtom({
      x: item[0],
      y: item[1],
      z: item[2],
      name: `atom_M${index}`,
      radius: perovskiteRenderStyle.M.radius,
      color: perovskiteRenderStyle.M.color
    });
  });
  let mns = perovskiteCoordinats.Mn;
  mns.forEach((item, index) => {
    renderAtom({
      x: item[0],
      y: item[1],
      z: item[2],
      name: `atom_Mn${index}`,
      radius: perovskiteRenderStyle.Mn.radius,
      color: perovskiteRenderStyle.Mn.color
    });
  });
}
