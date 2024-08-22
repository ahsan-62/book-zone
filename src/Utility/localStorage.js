const getAllData = () => {
  const allData = localStorage.getItem("bookData");

  if (allData) {
    return JSON.parse(allData);
  } else {
    return [];
  }
};

const setAllData = (id) => {
  const storedAllData = getAllData();

  const exist = storedAllData.find((book) => book.bookId === id);
  if (!exist) {
    storedAllData.push(id);
    localStorage.setItem("bookData", JSON.stringify(storedAllData));
  }
};

const getWishListData = () => {
  const allData = localStorage.getItem("wishListData");

  if (allData) {
    return JSON.parse(allData);
  } else {
    return [];
  }
};

const setWishListData = (id) => {
  const storedAllData = getWishListData();

  const exist = storedAllData.find((book) => book.bookId === id);
  if (!exist) {
    storedAllData.push(id);
    localStorage.setItem("wishListData", JSON.stringify(storedAllData));
  }
};

export { getAllData, setAllData, getWishListData, setWishListData };
