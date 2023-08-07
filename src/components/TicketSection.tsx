import { useState } from "react";
import type { Ticket } from "../data/data.type";
import { DATA } from "../data/data";

const TicketSection = ({ tickets }: { tickets: ReadonlyArray<Ticket> }) => {
  const [selectedTicket, setSelectedTicket] = useState(tickets[0]);

  const handleTicketClick = (ticket: Ticket) => {
    setSelectedTicket(ticket);
  };

  return (
    <div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 justify-between">
        <section className="flex flex-col gap-4">
          {selectedTicket ? (
            <div className="flex flex-col gap-4 px-6">
              <p className="text-center md:text-left">
                Con tu entrada tendrás acceso a todas las sesiones, además de:
              </p>
              <ul className="list-disc list-inside md:text-left">
                {selectedTicket.perks.map((perk, index) => (
                  <li key={index}>{perk}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
                No pierdas la oportunidad de hacerte con tu entrada
              </h3>
            </div>
          )}
          <a
            className="w-fit rounded-lg bg-blue-600 py-2 px-6 text-white"
            href={DATA.ticketsUrl}
          >
            Comprar Entradas
          </a>
        </section>

        <section>
          <div className="flex flex-row flex-wrap gap-4 align-middle justify-center md:grid md:grid-cols-3">
            {tickets.map((ticket, index) => (
              <article
                key={index}
                onClick={() => handleTicketClick(ticket)}
                className="w-2/4 md:w-4/5 md:mx-auto"
              >
                <div
                  className={`transition-all group flex flex-col border-2 rounded-2xl  overflow-hidden cursor-pointer select-none ${
                    ticket.isSoldOut
                      ? selectedTicket === ticket
                        ? "border-gray-600 hover:border-gray-600"
                        : "border-gray-400 hover:border-gray-600"
                      : selectedTicket === ticket
                      ? "border-blue-300 hover:border-blue-300"
                      : "border-blue-700 hover:border-blue-300"
                  } ${selectedTicket === ticket ? "scale-105" : ""}`}
                >
                  <div className="grid content-center aspect-[3/2] bg-light-background dark:bg-dark-background dark:text-light-background">
                    <span className=" text-center text-4xl font-semibold">
                      {ticket.price} €
                    </span>
                  </div>
                  <h3
                    className={`transition-all h-[40px] text-md font-semibold px-6 py-2 text-center text-light-background truncate ${
                      ticket.isSoldOut
                        ? selectedTicket === ticket
                          ? "bg-gray-600 group-hover:bg-gray-600"
                          : "bg-gray-400 group-hover:bg-gray-600"
                        : selectedTicket === ticket
                        ? "bg-blue-300 group-hover:bg-blue-300"
                        : "bg-blue-700 group-hover:bg-blue-300"
                    }`}
                  >
                    {ticket.name}
                  </h3>
                </div>
                <div className="text-center py-2">
                  {ticket.isSoldOut ? (
                    <p className="text-red-600">Sold Out</p>
                  ) : ticket.notice ? (
                    <p className="text-sm px-4">{ticket.notice}</p>
                  ) : (
                    ""
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TicketSection;
