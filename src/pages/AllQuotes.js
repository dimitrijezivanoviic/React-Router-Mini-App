import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Dimitrije", text: "Learning React is fun!" },
  { id: "q2", author: "Zivanovic", text: "Learning React is greate!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
