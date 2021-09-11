async function readAll(resource) {
  const res = await fetch(resource);

  return await res.json();
}

export default {readAll};