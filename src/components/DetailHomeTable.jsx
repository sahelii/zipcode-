import React from "react";

const DetailHomeTable = () => {
  return (
    <table className="table-auto">
      <tbody>
        <tr>
          <td className="font-bold py-1 text-xl">Country</td>
          <td>  India</td>
        </tr>
        <tr>
          <td className="font-bold py-1 md:py-2 text-xl">Postal Code</td>
          <td>  (Range)</td>
        </tr>
        <tr>
          <td className="font-bold py-1 md:py-2 text-xl">Capital</td>
          <td>  New Delhi</td>
        </tr>
        <tr>
          <td className="font-bold py-1 md:py-2 text-xl">Largest City</td>
          <td>  Delhi</td>
        </tr>
        <tr>
          <td className="font-bold py-1 md:py-2 text-xl">ISO 3166 Code</td>
          <td>    IND</td>
        </tr>
        <tr>
          <td className="font-bold py-1 md:py-2 text-xl">Calling Code</td>
          <td>  +91  </td>
        </tr>
        <tr>
          <td className="font-bold py-1 md:py-2 text-xl">Internet TLD</td>
          <td>  .in</td>
        </tr>
        <tr>
          <td className="font-bold py-1 md:py-2 text-xl">Currency</td>
          <td>  Rs.</td>
        </tr>
        <tr>
          <td className="font-bold py-1 md:py-2 text-xl">Time Zone</td>
          <td>  UTC+5:30e</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailHomeTable;
