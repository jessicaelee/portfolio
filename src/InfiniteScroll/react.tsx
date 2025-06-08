import { useEffect, useRef, useState } from "react";
import styles from "./Items.module.scss"

function ReactInfiniteScroll() {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);
  const itemsRef = useRef(items) // used to track the latest items

  const loadMore = () => {
    if (itemsRef.current.length >= 80) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems(prev => [...prev, ...Array.from({ length: 20 })]);
    }, 1000);
  };

  useEffect(() => {
    if (!loader.current || !hasMore) return;
    const cb = (entries: any) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    }
    const options = { threshold: 1 }
    const observer = new IntersectionObserver(cb, options)

    observer.observe(loader.current);

    return () => {
      observer.disconnect(); // important: always clean up
    };
  }, [hasMore]);

  useEffect(() => {
    itemsRef.current = items;
  }, [items])


  return <>
    <>Example of infinite scroll using React and Intersection Observer.</>
    {items.map((____, idx) => {
      return <div key={idx} className={styles.items}>Item #{idx + 1}</div>
    })}
    <div className={styles.loadMore} ref={loader}>{hasMore ? "Loading..." : "No more data"}</div>
  </>
}

export default ReactInfiniteScroll;
