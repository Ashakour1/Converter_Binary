function convertToBinary() {
    const nonBinaryNumber = document.getElementById("non-binary-number").value;
    const binaryNumber = parseInt(nonBinaryNumber).toString(2);
    document.getElementById("binary-number").value = binaryNumber;
  }
  