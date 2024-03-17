import type { Payload } from 'payload'

export const revalidate = async (args: {
  collection: string
  payload: Payload
  slug: string
}): Promise<void> => {
  const { slug, collection, payload } = args

  try {
    const res = await fetch(
      `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/next/revalidate?secret=${process.env.REVALIDATION_KEY}&collection=${collection}&slug=${slug}`,
    )

    if (res.ok) {
      payload.logger.info(`Revalidated page '${slug}' in collection '${collection}'`)
    } else {
      payload.logger.error(
        // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
        `Error revalidating page '${slug}' in collection '${collection}': ${res}`,
      )
    }
  } catch (err: unknown) {
    payload.logger.error(
      // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
      `Error hitting revalidate route for page '${slug}' in collection '${collection}': ${err}`,
    )
  }
}
