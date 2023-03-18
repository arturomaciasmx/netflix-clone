import Billboard from "@/components/Billboard";
import NavigationBar from "@/components/NavigationBar";
import MovieList from "@/components/MovieList";
import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import useMoviesList from "@/hooks/useMoviesList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();
  const { data: movies = [] } = useMoviesList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <NavigationBar />
      <Billboard />
      <MovieList title="Last Movies" data={movies} />
      <MovieList title="Favorites" data={favorites} />
    </>
  );
}
