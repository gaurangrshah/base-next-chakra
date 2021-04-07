import { Box, Table as ChTable, Thead, Tbody, Tr } from "@chakra-ui/react";

import { useTableRenderers } from "@/components/dashboard/utils/table-utils";

export function Table({ rows = [], table = {} }) {

  const { renderCaption, renderHeaders, renderRows } = useTableRenderers(
    rows,
    table
  );

  return (
    <Box maxW={"container.lg"} mx='auto' overflowX='auto' pb={6}>
      <ChTable size='lg'>
        {renderCaption()}
        <Thead>
          <Tr>{renderHeaders(rows)}</Tr>
        </Thead>
        <Tbody>{renderRows(rows)}</Tbody>
      </ChTable>
    </Box>
  );
}
