import * as THREE from "three";
import TextureBuilder from "./TextureBuilder";

class MaterialBuilder {
  static buildMaterial(options) {
    if (options.type == "MeshStandardMaterial") {

      let map = TextureBuilder.buildTexture(options.map);
      
      const material = new THREE.MeshStandardMaterial({
        color: options.color,
        transparent : options.transparent,
        opacity : options.opacity,
        flatShading : options.flatShading,
        metalness: options.metalness,
        roughness: options.roughness,
        wireframe: options.wireframe,
        map: map
      });
      material.uuid = options.uuid;
      return material;
    }

    if (options.type == "LineBasicMaterial") {

      const material = new THREE.LineBasicMaterial({
        color: options.color,
        transparent : options.transparent,
        opacity : options.opacity,
        linecap : options.lineCap,
        linejoin : options.lineJoin,
        linewidth : options.lineWidth
      });
      material.uuid = options.uuid;
      return material;
    }
  }
}

export default MaterialBuilder;
