import ContentCard from "../components/ContentCard";
export function ContentCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-0 w-full max-w-screen-xl mx-auto">
            <ContentCard
                image="https://source.unsplash.com/random/800x600"
                title="Título do card 1"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ContentCard
                image="https://source.unsplash.com/random/800x601"
                title="Título do card 2"
                paragraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
            <ContentCard
                image="https://source.unsplash.com/random/800x602"
                title="Título do card 3"
                paragraph="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <ContentCard
                image="https://source.unsplash.com/random/800x604"
                title="Título do card 5"
                paragraph="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
            <ContentCard
                image="https://source.unsplash.com/random/800x605"
                title="Título do card 6"
                paragraph="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            
            <div className="h-20"></div>
        </div>
    );
}